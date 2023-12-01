export default function CalendarDays({days, styles}) {
    let arr = [];
    for(let i = 1; i<= 42; i++) {
        arr.push(i);
    }

    return(
        <>
            {days.map((item, index) => <li key={index} className={item.classValue && styles[item.classValue]}>{item.days}</li>)}
        </>
        
    )
}