import React from 'react';

const Videos = () => {
    return (
        <section className="my-videos">
            <div className="youtube-item">
                <div className="youtube">
                    <iframe src="https://www.youtube.com/embed/ZNphwfxbs0w" title="tuto première pro" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                </div>
                <div className="youtube-caption">
                    <h3 className="youtube-title">TUTO PREMIÈRE PRO</h3>
                </div>
            </div>
            <div className="youtube-item">
                <div className="youtube">
                    <iframe src="https://www.youtube.com/embed/EJRnTIVkJSs" title="story paranormal" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                </div>
                <div className="youtube-caption">
                    <h3 className="youtube-title">STORY PARANORMAL</h3>
                </div>
            </div>
            <div className="youtube-item">
                <div className="youtube">
                    <iframe src="https://www.youtube.com/embed/E0VRXJQKjIw" title="editing intro" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                </div>
                <div className="youtube-caption">
                    <h3 className="youtube-title">EDITING INTRO</h3>
                </div>
            </div>
            <div className="youtube-item">
                <div className="youtube">
                    <iframe src="https://www.youtube.com/embed/TTuII_7N7tw" title="editing gaming" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                </div>
                <div className="youtube-caption">
                    <h3 className="youtube-title">EDITING GAMING</h3>
                </div>
            </div>
        </section>
    );
};

export default Videos;