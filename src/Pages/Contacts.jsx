import { useState } from "react";
import { Button } from "../Components/Button";
import { PageLayout } from "../Components/PageLayout";
import Popup from "../Components/Popup";
import { useDispatch, useSelector } from "react-redux";
import { addcontact, removecontact } from "../State/slice/contactSlice";
import { v4 as uuid } from "uuid";
import { TextInput } from "../Components/TextInput";

export const Contacts = () => {
    const [popup, setPopup] = useState(false);
    const dispatch = useDispatch();
    const { contacts } = useSelector((state) => state.contacts);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [deletePopup, setDeletePopup] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const id = uuid();
        dispatch(
            addcontact({
                id,
                contact: {
                    contactId: id,
                    name,
                    email,
                    phone,
                },
            })
        );
        setPopup(false);
    };

    const deleteThisContact = (id) => {
        dispatch(
            removecontact({
                id,
            })
        );
        setDeletePopup(false);
    };
    return (
        <PageLayout
            title={"Your"}
            coloredTitle={"Contacts"}
            leftHeaderElement={
                <Button
                    title={"Add Contacts"}
                    onClick={() => setPopup(true)}
                ></Button>
            }
        >
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(contacts).map((item) => (
                            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.name}
                                </th>
                                <td class="px-6 py-4">{item.phone}</td>
                                <td class="px-6 py-4">{item.email}</td>
                                <td class="px-6 py-4">
                                    <button
                                        href="#"
                                        class="font-medium text-red-600 hover:underline"
                                        onClick={() => {
                                            setDeleteItemId(item.contactId);
                                            setDeletePopup(true);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {popup && (
                <Popup backgroundClickFunction={() => setPopup(false)}>
                    <h1 className="text-[20px] font-medium my-2 text-center">
                        Add Contact
                    </h1>
                    <form
                        onSubmit={onSubmit}
                        className="flex flex-col items-center gap-3"
                    >
                        <TextInput
                            value={name}
                            setter={(value) => setName(value)}
                            placeholder={"Enter the name..."}
                        />
                        <TextInput
                            value={email}
                            setter={(value) => setEmail(value)}
                            placeholder={"Enter the email..."}
                        />
                        <TextInput
                            value={phone}
                            setter={(value) => setPhone(value)}
                            placeholder={"Enter the contact..."}
                        />
                        <Button title={"Add you idea"} type={"submit"}></Button>
                    </form>
                </Popup>
            )}

            {deletePopup && (
                <Popup>
                    <h1 className="text-md mb-2">
                        Are you sure you want to delete this contact?
                    </h1>
                    <hr />
                    <div className="mt-2 flex gap-2">
                        <button
                            className="px-2 py-1 bg-transparent border border-slate-400"
                            onClick={() => setDeletePopup(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-2 py-1 bg-red-300 rounded"
                            onClick={() => deleteThisContact(deleteItemId)}
                        >
                            Delete
                        </button>
                    </div>
                </Popup>
            )}
        </PageLayout>
    );
};
