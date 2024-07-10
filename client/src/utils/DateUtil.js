import moment from 'moment';

const setLocalDate = (date) => {
    const newDate = moment(date).utcOffset(-3).format('DD-MM-YYYY HH:mm:ss');
    return newDate;

}

export default setLocalDate