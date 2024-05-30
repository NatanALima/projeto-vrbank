import moment from 'moment-timezone';

const currDate = moment.tz("America/Sao_Paulo");

export default currDate.format();