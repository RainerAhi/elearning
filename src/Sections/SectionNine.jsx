import React, { useState } from "react";

export const SectionNine = () => {
    const questions = [
        {
            question: "¿Qué le recomendarías a Alex?",
            answers: [
                {
                    text: "Hablar con Santi, él es un influencer y tiene que pasar mucha presión social. Además, tiene razón al enojarse porque él ya le había pedido que lo mantuviera en secreto.",
                    explanation: (
                        <div className="explanation-content">
                            <ul>
                                <li>Las reacciones violentas, como las de Santi, no tienen justificación. 😡❌</li>
                                <li>Además, aprovecha su influencia y la diferencia de edad para manipular a Alex a su antojo. 🔄⚠️</li>
                                <li>No existe igualdad en esta relación, es Alex a merced de lo que Juli quiera, y eso no es saludable. 🚫⚖️</li>
                                <li>¿Qué es un relación impropia? Ver aquí.</li>
                            </ul>
                            <button className="back-button" onClick={() => handleBackButtonClick()}>Volver</button>
                        </div>
                    )
                },
                {
                    text: "¡Huir! La relación tiene muchos red flags. Los comportamientos violentos de Santi son solo la punta del iceberg y puede haber mucho más.",
                    explanation: (
                        <div className="explanation-content">
                            <ul>
                                <li>Lo mejor para Alex es salir de esa relación. 🚪💔</li>
                                <li>Santil lo manipula y no lo trata como igual. 🎭🚷</li>
                                <li>Incluso si Juli se comportara de manera menos violenta, la gran diferencia de edad hace que esta relación sea impropia y puede afectar negativamente el desarrollo de Alex. 🙅‍♂️⏳</li>
                                <li>¿Qué es un relación impropia? Ver aquí.</li>
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

    const handleQuestionClick = (index) => {
        setSelectedQuestionIndex(index);
        setSelectedAnswerIndex(null); // Reset selected answer
    };

    const handleAnswerClick = (index) => {
        setSelectedAnswerIndex(index);
    };

    const handleBackButtonClick = () => {
        setSelectedAnswerIndex(null);
    };

    const currentQuestion = questions[selectedQuestionIndex];

    return (
        <section className="section nine">
            <div className="nine-layover">
                <img className="bk-g-triangle" src="/ctrianglebig.svg" />
                <img className="g-square" src="square.svg" />
                <div className="four-text-align">
                    <p className={`nine-main-text ${selectedAnswerIndex !== null ? 'answered' : ''}`}>{currentQuestion.question}</p>
                    <div>
                        {currentQuestion.answers.map((answer, answerIndex) => (
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
                    {selectedAnswerIndex !== null && (
                        <div className={`explanation ${selectedAnswerIndex === null ? '' : selectedAnswerIndex === 0 ? 'green' : 'red'}`}>
                            {currentQuestion.answers[selectedAnswerIndex].explanation}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};