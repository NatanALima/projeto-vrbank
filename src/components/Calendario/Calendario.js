import CalendarDays from "./CalendarDays"
import styles from "../../assets/css/Calendario.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useReducer } from "react";


const reducer = (state, action) => {
    switch(action.type) {
        case 'setDays':
            return {
                currMonth: state.currMonth,
                listDays: action.listDays
            }
        case 'changeMonth':
            return {
                currMonth: action.currMonthValue,
                listDays: action.listDays
            }
        default:
            return 'Opção incorreta ou não existe. Tente novamente!';
    }
}

export default function Calendario() {
    const date = new Date();
    const yearDate = date.getFullYear();
    const monthList = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
                       "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const [state, dispatch] = useReducer(reducer, {
        currMonth: date.getMonth(),
        listDays: []
    })

    //Valida e impede que haja mês 0 ou 13;
    const monthValidate = (month, direction) => {
        /* 
            Explicando os motivos do newMonth receber 0 ao invés de 1 quando for mês + 1 for igual a 12 e 
                                  do newMonth receber 11 quando Mês + 1 for igual a 1:
            [0-> JANEIRO, 1 -> FEVEREIRO, ..., 10 -> NOVEMBRO, 11 -> DEZEMBRO];
            
            newMonth = 0 equivale ao mês 1 (Janeiro) dentro de um array. O mesmo acontece com newMonth = 11;
        */
        let newMonth; 
        if(direction === 'next') {
            month + 1 === 12 ? newMonth = 0 : newMonth = month + 1;

        } else {
            month + 1 === 1 ? newMonth = 11 : newMonth = month - 1;

        }
        return newMonth;

    }

    //Pega a SEMANA do primeiro ou último dia do mês
    const getWeekOfDay = (month, dayValue) => {
        //OBS: dayValue se aplica como 1 - primeiro dia e 0 último dia;
        return new Date(yearDate, month, dayValue).getDay();
    }

    //Cria a lista de dias (dias dos meses anterior e posterior)
    const createAnotherListDays = (optionDays, limitDays, month = null) => {
        let listAnotherDays = [];
        
        switch(optionDays) {
            case 'prev':
                const lastDayPrevMonth = new Date(yearDate, month, 0).getDate();
                for(let days = lastDayPrevMonth; days > lastDayPrevMonth - limitDays; days--) {
                    listAnotherDays.push({days: days, classValue: "anotherDay"});
                }
                return listAnotherDays.sort();

            case 'next':
                for(let days = 1; days <= limitDays; days++) {
                    listAnotherDays.push({days: days, classValue: "anotherDay"});

                }
                return listAnotherDays;

            default:
                return 'Opção não encontrada';
        }
    }

    

    const createListDays = (month) => {
        let listDays = [];
        //Pego o primeiro dia da semana do mês atual: determina quantos dias do Mês anterior aparecerá;
        const firstWeekDayMonth = getWeekOfDay(month, 1);
        //Pego o último dia do Mês atual: determina a quantidade de dias que o mês atual terá;
        const lastDayMonth = new Date(yearDate, month + 1, 0).getDate();

        const listPrevDays = createAnotherListDays('prev', firstWeekDayMonth, month);
        listDays = listDays.concat(listPrevDays);

        //Adiciona na lista de dias os Dias do mês atual;
        for(let i = 1; i <= lastDayMonth; i++) {
            if(i === date.getDate() && state.currMonth === month) {
                listDays.push({days: i, classValue: "activeDay"})
            }
            listDays.push({days: i, classValue: ""});

        }
        //42 refere-se ao tamanho limite do calendário em grid;
        const listNextDays = createAnotherListDays('next', 42 - listDays.length);
        
        listDays = listDays.concat(listNextDays);
        return listDays;

    }  


    
    const handleClickChange = (direction) => {
        let newCurrMonth = monthValidate(state.currMonth, direction);
        dispatch({type: 'changeMonth', 
                  currMonthValue: newCurrMonth,
                  listDays: createListDays(newCurrMonth)});

    }

    useEffect(() => {
        dispatch({type: 'setDays',
                  listDays: createListDays(state.currMonth)})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    

    return(
        <section className={styles.calendarContainer}>
            <header>
                <h3>{monthList[state.currMonth]}</h3>
                <div className={styles.directionContainer}>
                    <FaChevronLeft className={styles.directionContent} onClick={() => handleClickChange('prev')}/>
                    <FaChevronRight className={styles.directionContent} onClick={() => handleClickChange('next')}/>
                </div>
            </header>
            <div className={styles.calendarContainer__content}>
                <ul className={styles.content__weekInfo}>
                    <li>Dom</li>
                    <li>Seg</li>
                    <li>Ter</li>
                    <li>Qua</li>
                    <li>Qui</li>
                    <li>Sex</li>
                    <li>Sab</li>
                </ul>
                <ul className={styles.content__daysInfo}>
                    <CalendarDays days={state.listDays} styles={styles}/>
                </ul>
            </div>
        </section>
        
    )
}