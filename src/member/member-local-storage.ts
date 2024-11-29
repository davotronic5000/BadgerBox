export const getMemberIDFromLocalStorage = () => {
    return localStorage.getItem("memberID");
}

export const storeMemberIDInLocalStorage = (memberID: string) => {
    localStorage.setItem("memberID", memberID);
}