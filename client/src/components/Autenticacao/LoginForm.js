import InputAuth from "../layout/InputAuth";

export default function LoginForm({styles}) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return(
        <form action="" className={styles.fadeChangeLeft} onSubmit={handleSubmit}>
            <h1>Login</h1>
            <InputAuth type={"text"} name={"userName"} id={"userName"} placeholder={"Nome do Usuário"} textView={"Usuário"}/>
            <InputAuth type={"text"} name={"userPass"} id={"userPass"} placeholder={"Senha do Usuário"} textView={"Senha"}/>
            <button>Login</button>
        </form>
    )
}