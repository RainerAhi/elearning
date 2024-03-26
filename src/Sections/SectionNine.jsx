import React, { useState } from "react";

export const SectionNine = () => {
    const questions = [
        {
            question: "¿Qué le recomendarías a Alex?",
            answers: [
                {
                    text: "¡Ahí no es! La relación tiene muchos red flags. Los comportamientos violentos de Santi son solo la punta del iceberg y puede haber mucho más.",
                    explanation: (
                        <div className="explanation-content">
                            <img className="exp-image" src="/h.svg" />
                            <ul>
                                <li>Lo mejor para Alex es salir de esa relación. 🚪💔</li>
                                <li>Santil lo manipula y no lo trata como igual. 🎭🚷</li>
                                <li>Incluso si Santi se comportara de manera menos violenta, la gran diferencia de edad hace que esta relación sea impropia y puede afectar negativamente el desarrollo de Alex. 🙅‍♂️⏳</li>
                                <h1>Recordá:</h1>
                                <li>¡Si vos o una amigx necesitan ayuda, conversá con alguna persona adulta de confianza o llamá a alguna de estas líneas de apoyo.</li>
                                <h1>Más info: </h1>
                                <li><a href="https://mequierenomequiere.org/relaciones-impropias-2/#que-es" target="_blank" >Qué son las relaciones impropias</a></li>
                                <li><a href="https://mequierenomequiere.org/relaciones-impropias-2/#leyes" target="_blank" >Leyes</a></li>
                                <li><a href="https://mequierenomequiere.org/relaciones-impropias-2/#denuncia" target="_blank" >Pasos para denunciar</a></li>
                                <li><a href="https://mequierenomequiere.org/relaciones-impropias-2/#delitos" target="_blank" ></a>Delitos relacionados</li>
                                <li><a href="https://mequierenomequiere.org/relaciones-impropias-2/" target="_blank" >Mitos del amor romántico</a></li>
                            </ul>
                            <button className="back-button" onClick={() => handleBackButtonClick()}>Volver</button>
                        </div>
                    )
                },
                {
                    text: "Hablá con Santi, él es un influencer y tiene que pasar mucha presión social. Además, tiene razón al enojarse porque él ya te había pedido que lo mantuvieras en secreto. ",
                    explanation: (
                        <div className="explanation-content">
                            <img className="exp-image" src="/hrt.svg" />
                            <ul>
                                <li>Las reacciones violentas, como las de Santi, no tienen justificación. 😡❌</li>
                                <li>Además, aprovecha su influencia y la diferencia de edad para manipular a Alex a su antojo. 🔄⚠️</li>
                                <li>No existe igualdad en esta relación, es Alex a merced de lo que Juli quiera, y eso no es saludable. 🚫⚖️</li>
                                <li>¿Qué es un relación impropia? Ver aquí.</li>
                                <h1>Recordá:</h1>
                                <li>¡Si vos o una amigx necesitan ayuda, conversá con alguna persona adulta de confianza o llamá a alguna de <a href="https://mequierenomequiere.org/rutas-de-denuncia-cuales-son-las-lineas-de-apoyo-y-de-denuncia/" target="_blank" >estas líneas de apoyo.</a> </li>
                                <h1>Más info: </h1>
                                <li><a href="https://mequierenomequiere.org/relaciones-impropias-2/#que-es" target="_blank" >Qué son las relaciones impropias</a></li>
                                <li><a href="https://mequierenomequiere.org/relaciones-impropias-2/#leyes" target="_blank" >Leyes</a></li>
                                <li><a href="https://mequierenomequiere.org/relaciones-impropias-2/#denuncia" target="_blank" >Pasos para denunciar</a></li>
                                <li><a href="https://mequierenomequiere.org/relaciones-impropias-2/#delitos" target="_blank" ></a>Delitos relacionados</li>
                                <li><a href="https://mequierenomequiere.org/relaciones-impropias-2/" target="_blank" >Mitos del amor romántico</a></li>
                            </ul>
                            <button className="back-button" onClick={() => handleBackButtonClick()}>Volver</button>
                        </div>
                    )
                }
            ],
            correctAnswerIndex: 0
        },
        // Add more questions here following the same structure
    ];

    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const handleQuestionClick = (index) => {
        setSelectedQuestionIndex(index);
        setSelectedAnswerIndex(null); // Reset selected answer
        setShowExplanation(false);
    };

    const handleAnswerClick = (index) => {
        setSelectedAnswerIndex(index);
        setShowExplanation(true);
    };

    const handleBackButtonClick = () => {
        setShowExplanation(false);
        setSelectedAnswerIndex(null);
    };

    const currentQuestion = questions[selectedQuestionIndex];

    return (
        <section className="section nine">
            <div className="nine-layover">
                <img className="bk-g-triangle" src="/ctrianglebig.svg" />
                <img className="g-square" src="square.svg" />
                <div className="four-text-align">
                    <p className={`nine-main-text ${selectedAnswerIndex !== null || showExplanation ? 'answered' : ''}`}>
                        {currentQuestion.question}
                    </p>
                    <div>
                        {!showExplanation && currentQuestion.answers.map((answer, answerIndex) => (
                            <div key={answerIndex} className="answer">
                                <button
                                    className={`answer-button ${selectedAnswerIndex === answerIndex ? (answerIndex === 0 ? 'selected green' : 'selected red') : ''}`}
                                    onClick={() => handleAnswerClick(answerIndex)}
                                >
                                    {answer.text}
                                </button>
                            </div>
                        ))}
                    </div>
                    {showExplanation && (
                        <div className={`explanation ${selectedAnswerIndex === null ? '' : selectedAnswerIndex === 0 ? 'green' : 'red'}`}>
                            {currentQuestion.answers[selectedAnswerIndex].explanation}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};