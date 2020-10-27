export function AddPage() {
    function submit(e) {
        e.preventDefault();
        const nameValue = e.target.name.value;
        const phoneValue = e.target.phone.value;
        const emailValue = e.target.email.value;
        console.log(nameValue, phoneValue, emailValue);
    }

    return (
        <>
            <h2>Add Contact</h2>
            <form onSubmit={submit}>
                <p>
                    Name:
                    <br />
                    <input type="text" name="name" />
                </p>
                <p>
                    Phone:
                    <br />
                    <input type="text" name="phone" />
                </p>
                <p>
                    Email:
                    <br />
                    <input type="text" name="email" />
                </p>
                <p>
                    <button type="submit">Save</button>
                </p>
            </form>
        </>
    );
}
