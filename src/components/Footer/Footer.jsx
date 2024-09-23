import './Footer.css';

export const Footer = () => {
    return (

        <div className='.Footer-container-main'>
            <p className='Footer-title'>Customer Reviews</p>
            <div className='Footer-container'>
                <form>
                    <input type="text" autocomplete="off" id="name" name="name" placeholder="Your name..." required />
                    <input type="text" autocomplete="off" id="name" name="review" placeholder="Reviews..." required />
                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>

    )
};