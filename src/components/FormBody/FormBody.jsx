export const FormBody = () => {
    return (
        <form>
            <input
                type="text"
                autoComplete="off"
                id="name"
                name="name"
                placeholder="Your name..."
                required
            />
            <input
                type="text"
                autoComplete="off"
                id="name"
                name="review"
                placeholder="Reviews..."
                required
            />
            <button type="submit">SEND</button>
        </form>
    )
}
