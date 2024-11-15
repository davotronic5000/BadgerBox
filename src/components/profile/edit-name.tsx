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
    if (!editing) {
        return (
            <dl className="flex w-10/12 items-center py-2">
                <dt className="mr-2 w-1/3 text-right font-title text-lime-500">
                    Name:
                </dt>
                <dd className="flex w-2/3 items-center justify-between">
                    name
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
                let data = Object.fromEntries(new FormData(e.currentTarget));
                setAction(`submit ${JSON.stringify(data)}`);
            }}
        >
            <TextField name="username" isRequired>
                <Label className="font-title text-lime-500">Name:</Label>
                <Input />
                <FieldError />
            </TextField>
            <div style={{ display: "flex", gap: 8 }}>
                <Button type="submit" size="icon">
                    <CheckIcon className="size-4" />
                </Button>
            </div>
        </Form>
    );
};

export default EditName;
