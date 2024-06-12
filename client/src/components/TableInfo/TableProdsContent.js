export default function TableProdsContent({prodInfo, styles}) {
    return(
        <>
            {prodInfo.map(([key,value], index) => {
                // Não vou mentir, isso é gambiarra
                return (key !== "_id" && <td key={index}>
                            <p className={styles.notEditable}>{value}</p>
                       </td>)
                    
            })}
        </>
    )
}