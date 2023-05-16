import { ContactState } from "@/Redux/selectedContactSlice";

export default function Order(a:ContactState, b:ContactState) {
    var nomeA = a.name?.toUpperCase() as string;
    var nomeB = b.name?.toUpperCase() as string;

    if (nomeA  < nomeB) {
        return -1;
    }
    if (nomeA > nomeB) {
        return 1;
    }

    return 0;
}