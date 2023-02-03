export const SignIn = () => {
    const handleSumit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="container-field container-primary">
            <main className="landlords-main">
                <h1 className="signin-signup-header">Авторизация</h1>
                <p className="signin-signup-description">Введите данные вашей учетной записи, если вы уже зарегистрированы</p>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="mail@mail.com" required />
                    <label for="floatingInput">E-mail адрес</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Пароль</label>
                </div>
                <button onClick={handleSumit} type="submit" class="btn btn-primary button-blue login-btn">Войти</button>
            </main>
        </div>
        </>
    );
}

export default SignIn;