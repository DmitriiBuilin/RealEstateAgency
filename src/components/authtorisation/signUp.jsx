export const SignUp = () => {
    const handleSumit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="container-field container-primary">
            <main className="landlords-main">
                <h1 className="signin-signup-header">Регистрация</h1>
                <p className="signin-signup-description">Создайте новую учетную запись</p>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="mail@mail.com" required />
                    <label for="floatingInput">E-mail адрес</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Пароль</label>
                </div>
                <button onClick={handleSumit} type="submit" class="btn btn-primary button-blue login-btn">Зарегистрироваться</button>
            </main>
        </div>
        </>
    );
}

export default SignUp;