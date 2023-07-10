import styles from '../../assets/css/TableInfo.module.css';

export default function TableInfo() {
    return (
        <div className={styles.tableContainer}>
            <table>
                <thead>
                    {/* Pegar tamanho do array/objetos de conteudo para centralizar */}
                    <tr className={styles.tableTitle}><th colSpan={5}>NOME DA TABELA</th></tr>
                    <tr>
                        <th>Titulo de Conteudo1</th>
                        <th>Titulo de Conteudo2</th>
                        <th>Titulo de Conteudo3</th>
                        <th>Titulo de Conteudo4</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Info1</td>
                        <td>Info2</td>
                        <td>Info3</td>
                        <td>Info4</td>
                        <td className={styles.tableContent__btns}>
                            {/* Adicionar uma verificação com o useState para saber quando deverá aparecer o botão de editar e quando deverá aparecer a coleção dos botões de confirmar e cancelar ação */}
                            <button type="button">Editar</button><button type="button">Editar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Info1</td>
                        <td>Info2</td>
                        <td>Info3</td>
                        <td>Info4</td>
                        <td className={styles.tableContent__btns}>
                            {/* Adicionar uma verificação com o useState para saber quando deverá aparecer o botão de editar e quando deverá aparecer a coleção dos botões de confirmar e cancelar ação */}
                            <button type="button">Editar</button><button type="button">Editar</button>
                        </td>
                    </tr>
                </tbody>
            
            </table>
        </div>
    )
}