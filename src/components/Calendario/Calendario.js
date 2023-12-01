import CalendarDays from "./CalendarDays"
import styles from "../../assets/css/Calendario.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useReducer } from "react";


const reducer = (state, action) => {
    switch(action.type) {
        case 'setDays':
            return {
                currMonth: state.currMonth,
                yearDate: state.yearDate,
                listDays: action.listDays
            }
        case 'changeMonth':
            return {
                currMonth: action.currMonthValue,
                yearDate: state.yearDate,
                listDays: action.listDays
            }
        default:
            return 'Opção incorreta ou não existe. Tente novamente!';
    }
}

export default function Calendario() {
    const date = new Date();
    const monthList = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
                       "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const [state, dispatch] = useReducer(reducer, {
        currMonth: date.getMonth(),
        yearDate: date.getFullYear(),
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


    const createPrevListDays = (month, year) => {
        let listPrevDays = [];
        //Primeiro dia da semana do Mês atual
        const firstWeekDayMonth = new Date(year, month, 1).getDay();
        //Último dia do mês anterior
        const lastDayPrevMonth = new Date(year, month, 0).getDate();

        
        for(let days = lastDayPrevMonth; days > lastDayPrevMonth - firstWeekDayMonth; days--) {
            listPrevDays.push({days: days, classValue: "anotherDay"})

        }

        return listPrevDays.sort((a,b) => a.days - b.days);

    }

    const createCurrListDays = (month, year) => {
        const listCurrDays = [];
        const lastDayCurrMonth = new Date(year, month + 1, 0).getDate();

        for(let days = 1; days <= lastDayCurrMonth; days++) {
            if(days === date.getDate() && state.currMonth === month) {
                listCurrDays.push({days: days, classValue: "activeDay"})

            } else {
                listCurrDays.push({days: days, classValue: ""})
            }
            

        }
        return listCurrDays;

    }

    const createNextListDays = (limitDays) => {
        let listNextDays = [];

        for(let days = 1; days <= limitDays; days++ ) {
            listNextDays.push({days: days, classValue: "anotherDay"});

        }

        return listNextDays;


    }

    

    const createListDays = (month, year) => {
        console.log('ano:',year)
        let listDays = [];
        const prevDays = createPrevListDays(month, year)
        const currDays = createCurrListDays(month, year);

        console.log(`prevDays: ${prevDays}`);

        listDays = listDays.concat(prevDays, currDays);

        const nextDays = createNextListDays(42 - listDays.length);
        
        listDays = listDays.concat(nextDays);
        return listDays;

    }  


    
    const handleClickChange = (direction) => {
        let newCurrMonth = monthValidate(state.currMonth, direction);
        dispatch({type: 'changeMonth', 
                  currMonthValue: newCurrMonth,
                  listDays: createListDays(newCurrMonth, state.yearDate)});

    }

    useEffect(() => {
        dispatch({type: 'setDays',
                  listDays: createListDays(state.currMonth, state.yearDate)})
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