import {Github, Discord} from "../assets/@svg/react/solid"

function Modal(props) {
    return (
        <>
            <div className="modal" ref={props.ModalRef} onClick={e => props.hideModal(e)}>
                <div className="card profile">
                    <div className="text">
                        <div className="title">
                        About me.
                        </div>
                        <div className="body">
                        I’m Martin Kopecký, but i go by Kopy. I am {new Date().getFullYear() - 2001} year old weirdo from Czech republic, interested in Front-end development.
                        <br/>
                        <br/>
                        I'm a nerd that likes to play video games and build websites.
                        <br/>
                        <br/>
                        I’m interested in UI/UX development and creating smart user interface with awesome and rich experience for the user.
                        </div>
                        <div className="svg-profile">
                            <a href="https://github.com/kopytkg">
                                <Github/>
                            </a>
                            <a href="https://discord.gg/ZtjNUMHm8C">
                                <Discord/>
                            </a>
                        </div>
                    </div>
                    <div className="splash">
                        <div className="mask"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;