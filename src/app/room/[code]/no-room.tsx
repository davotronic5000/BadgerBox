interface NoRoomProps {
    code?: string;
}

const NoRoom = ({ code }: NoRoomProps) => {
    return <div>Sorry room{code ? ` S{code} ` : ""}does not exist.</div>;
};

export default NoRoom;
