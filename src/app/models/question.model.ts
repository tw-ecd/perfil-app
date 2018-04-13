import { Option } from './option.model';

export interface Question {
    _id?: String;
    description: String;
    order: number;
    active: boolean;
    options: Option[];
}
