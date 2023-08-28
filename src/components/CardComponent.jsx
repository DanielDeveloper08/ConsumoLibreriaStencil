import React from 'react'

export const CardComponent = () => {
    return (
        <>
            <st-card>
                <st-card-header>
                    <span className="st-card-header-title">Apple UX</span>
                    <span className="st-card-header-subtitle">User Experience</span>
                </st-card-header>

                <st-card-content>
                    <span className="st-card-content">
                        Apple products work beautifully because our designers maintain an intense focus on simplicity and usability.
                        They judge the success of their work not by everything they put into it, but by everything the user gets out of
                        it.
                    </span>
                </st-card-content>

                <st-card-bottom>
                    {/* <button-component text="Ver detalle" color="#D2006E"></button-component> */}
                    <a href="#" className="moreDetail">See more detail  <i className="bi bi-chevron-right"></i></a>

                </st-card-bottom>
            </st-card>
        </>
    )
}
