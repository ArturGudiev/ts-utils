import moment from 'moment';
import {logDateFormat} from '../../classes/log-message';

export function sortByDateFieldAsc(l1: any, l2: any) {
    const m1 = moment(l1.date, logDateFormat);
    const m2 = moment(l2.date, logDateFormat);
    return m1 < m2 ? -1 : (m1 > m2 ? 1 : 0);
}

export function sortByDateFiledDesc(l1: any, l2: any) {
    return -sortByDateFieldAsc(l1, l2);
}
