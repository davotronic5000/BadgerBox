import { getRandomName } from '@/utilities/random-name-list';
import { v4 as uuidv4} from 'uuid';

export interface Member {
    id: string;
    name: string;
}

export const createMember = (member?: string | null) => {
    if (member) {
        return JSON.parse(member);
    }
    return {
        id: uuidv4(),
        name: getRandomName(),
    }
}