import moment from 'moment-timezone';

const currDate = (date) => {
    const tzDate = moment.tz(date, "America/Sao_Paulo").format();
    return tzDate
}

export default currDate;