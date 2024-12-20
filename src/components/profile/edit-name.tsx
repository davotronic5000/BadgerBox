import { CheckIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import {
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "react-aria-components";
import Button from "../button/button";

interface EditNameProps {}

const EditName = ({}: EditNameProps) => {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState("FunkyChicken");
    if (!editing) {
        return (
            <dl className="flex w-full items-center border border-solid border-lime-200 px-2 py-4 md:w-10/12">
                <dt className="mr-2 w-1/3 text-right font-title text-lime-500">
                    Name:
                </dt>
                <dd className="flex w-2/3 items-center justify-between">
                    {name}
                    <Button
                        onPress={() => setEditing(true)}
                        size="icon"
                        className="ml-2"
                        icon={<PencilSquareIcon className="size-4" />}
                    >
                        Edit
                    </Button>
                </dd>
            </dl>
        );
    }
    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                // setAction(`submit ${JSON.stringify(data)}`);
                setName(data.name as string);
                setEditing(false);
            }}
            className="flex w-full items-center border border-solid border-lime-200 p-2 md:w-10/12"
        >
            <TextField
                name="name"
                isRequired
                className="flex w-full items-center"
            >
                <Label className="mr-2 w-1/3 text-right font-title text-lime-500">
                    Name:
                </Label>
                <div className="flex flex-col">
                    <Input className="border border-lime-200 bg-slate-700 p-2" />
                    <FieldError className="mt-2 text-sm" />
                </div>
            </TextField>
            <div className="ml-2">
                <Button type="submit" size="icon">
                    <CheckIcon className="size-4" />
                </Button>
            </div>
        </Form>
    );
};

export default EditName;
