import CalendarDays from "./CalendarDays"
import styles from "../../assets/css/Calendario.module.css";
import '../../assets/css/animation.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useReducer, useState } from "react";


const reducer = (state, action) => {
    switch(action.type) {
        case 'setDays':
            return {
                ...state,
                listDays: action.listDays
            }
        case 'changeMonth':
            return {
                ...state,
                currMonth: action.currMonthValue,
                listDays: action.listDays
            }
        case 'changeDate':
            return {
                date: action.dateValue,
                yearDate: action.yearDateValue,
                currMonth: action.currMonthValue,
                listDays: action.listDays
            }
        default:
            return 'Opção incorreta ou não existe. Tente novamente!';
    }
}

export default function Calendario() {
    const monthList = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
                       "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const [isAnimation, setIsAnimation] = useState(false);
    const [animation, setAnimation] = useState("");
    const [state, dispatch] = useReducer(reducer, {
        date: new Date(),
        currMonth: new Date().getMonth(),
        yearDate: new Date().getFullYear(),
        listDays: []
    })

    const dateValidate = (month) => {
        if(month === 12 || month < 0) {
            return 0;

        } 
        return 1; 
    }



    const createPrevListDays = (month, year) => {
        let listPrevDays = [];
        //Primeiro dia da semana do Mês atual
        const firstWeekDayMonth = new Date(year, month, 1).getDay();
        //Último dia do mês anterior
        const lastDayPrevMonth = new Date(year, month, 0).getDate();

        
        for(let days = firstWeekDayMonth; days > 0; days--) {
            listPrevDays.push({days: lastDayPrevMonth - days + 1, classValue: "anotherDay"})

        }

        return listPrevDays.sort((a,b) => a.days - b.days);

    }

    const createCurrListDays = (month, year) => {
        const nowDate = new Date();
        const listCurrDays = [];
        const lastDayCurrMonth = new Date(year, month + 1, 0).getDate();

        for(let days = 1; days <= lastDayCurrMonth; days++) {
            if(days === nowDate.getDate() && month === nowDate.getMonth() && year === nowDate.getFullYear()) {
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
        let listDays = [];
        const prevDays = createPrevListDays(month, year)
        const currDays = createCurrListDays(month, year);

        listDays = listDays.concat(prevDays, currDays);

        const nextDays = createNextListDays(42 - listDays.length);
        
        listDays = listDays.concat(nextDays);
        return listDays;

    }  


    
    const handleClickChange = (direction) => {
        setIsAnimation(animation => !animation);
        let newMonth;
        switch(direction) {
            case 'prev':
                newMonth = state.currMonth - 1;
                setAnimation("fadeRight");
                break;
            case 'next':
                newMonth = state.currMonth + 1;
                setAnimation("fadeLeft");
                break;
            default:
                return 'Erro: Opção Inválida';
        }
        
        if(!dateValidate(newMonth)) {
            const newDate = new Date(state.yearDate, newMonth, 1);
            const newYear = Number(newDate.getFullYear()),
                  newCurrMonth = Number(newDate.getMonth());

            dispatch({type: 'changeDate',
                      dateValue: newDate,
                      yearDateValue: newYear,
                      currMonthValue: newCurrMonth,
                      listDays: createListDays(newCurrMonth, newYear)
                    })

        } else {
            dispatch({type: 'changeMonth',
                      currMonthValue: newMonth,
                      listDays: createListDays(newMonth, state.yearDate)
                     })
        }

    }

    useEffect(() => {
        dispatch({type: 'setDays',
                  listDays: createListDays(state.currMonth, state.yearDate)})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <section className={styles.calendarContainer}>
            <header>
                <h3>{monthList[state.currMonth]} {state.yearDate}</h3>
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
                <ul className={`${styles.content__daysInfo} ${isAnimation ? animation : ""}`} onAnimationEnd={() => setIsAnimation(animation => !animation)}>
                    <CalendarDays days={state.listDays} styles={styles}/>
                </ul>
            </div>
        </section>
        
    )
}