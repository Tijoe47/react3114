import React, { useState, useEffect } from 'react';
import { addRiddle } from './addRiddle.js';

const Item = () => {
    useEffect(() => {
        addRiddle();
    }, []);

    const [answers, setAnswers] = useState([]);
    const [riddles, setRiddles] = useState([
        {
            id: 1,
            description: "Я говорю без уст и слышу без ушей. У меня нет тела, но я оживаю от ветра. Что я такое?",
            options: ["Эхо", "Свист", "Облако", "Музыка"],
            correct: 0
        },
        {
            id: 2,
            description: "Чем больше ты берешь, тем больше оставляешь за собой. Что это?",
            options: ["Следы", "Дыхание", "Воспоминания", "Мечты"],
            correct: 0
        },
        {
            id: 3,
            description: "Что можно увидеть с закрытыми глазами?",
            options: ["Муху", "Сон", "Свет", "Темноту"],
            correct: 2
        },
        {
            id: 4,
            description: "Что можно сломать, назвав?",
            options: ["Обещание", "Сердце", "Стекло", "Молчание"],
            correct: 3
        },
        {
            id: 5,
            description: "Какой концерт можно посетить только один раз?",
            options: ["Рок", "Классика", "Жизнь", "Цирк"],
            correct: 2
        },
        {
            id: 6,
            description: "Я всегда иду вперед, но никогда не двигаюсь. Что я?",
            options: ["Мысль", "Тень", "Вода", "Время"],
            correct: 1
        }
    ]);

    const handleAnswerChange = (riddleId, selectedOption) => {
        const updatedAnswers = [...answers];
        updatedAnswers[riddleId - 1] = selectedOption;
        setAnswers(updatedAnswers);
    };

    const checkAnswers = () => {
        let correctAnswers = 0;
        answers.forEach((answer, index) => {
            if (answer === riddles[index].correct) {
                correctAnswers++;
            }
        });
        alert(`Количество правильных ответов: ${correctAnswers}`);
    };

    const RiddleForm = () => {
        const [riddleDescription, setRiddleDescription] = useState('');
        const [option1, setOption1] = useState('');
        const [option2, setOption2] = useState('');
        const [option3, setOption3] = useState('');
        const [option4, setOption4] = useState('');
        const [correctOption, setCorrectOption] = useState(1);

        const handleRiddleSubmit = (event) => {
            event.preventDefault();
            const newRiddle = {
                id: riddles.length + 1,
                description: riddleDescription,
                options: [option1, option2, option3, option4],
                correct: correctOption - 1
            };
            setRiddles([...riddles, newRiddle]);
        };

        useEffect(() => {
            const addRiddleButton = document.getElementById('addRiddleButton');
            addRiddleButton.addEventListener('click', handleAddRiddleButtonClick);

            return () => {
                addRiddleButton.removeEventListener('click', handleAddRiddleButtonClick);
            };
        }, []);

        const handleAddRiddleButtonClick = () => {
            const formContainer = document.getElementById('formContainer');
            formContainer.style.display = 'block';
        };

        return (
            <div>
                <div className="overlay" id="overlay"></div>
                <div className="form-container" id="formContainer">
                    <h2>Новая загадка</h2>
                    <form id="riddleForm" onSubmit={handleRiddleSubmit}>
                        <label htmlFor="riddleDescription">Описание загадки:</label><br />
                        <input
                            type="text"
                            id="riddleDescription"
                            name="riddleDescription"
                            value={riddleDescription}
                            onChange={(e) => setRiddleDescription(e.target.value)}
                        /><br /><br />
                        <label htmlFor="option1">Вариант 1: </label>
                        <input
                            type="text"
                            id="option1"
                            name="option1"
                            value={option1}
                            onChange={(e) => setOption1(e.target.value)}
                        /><br />
                        <label htmlFor="option2">Вариант 2: </label>
                        <input
                            type="text"
                            id="option2"
                            name="option2"
                            value={option2}
                            onChange={(e) => setOption2(e.target.value)}
                        /><br />
                        <label htmlFor="option3">Вариант 3: </label>
                        <input
                            type="text"
                            id="option3"
                            name="option3"
                            value={option3}
                            onChange={(e) => setOption3(e.target.value)}
                        /><br />
                        <label htmlFor="option4">Вариант 4: </label>
                        <input
                            type="text"
                            id="option4"
                            name="option4"
                            value={option4}
                            onChange={(e) => setOption4(e.target.value)}
                        /><br /><br />
                        <label htmlFor="correctOption">Правильный ответ (от 1 до 4) </label>
                        <input
                            type="number"
                            id="correctOption"
                            name="correctOption"
                            value={correctOption}
                            onChange={(e) => setCorrectOption(parseInt(e.target.value))}
                            min="1"
                            max="4"
                        /><br /><br />
                        <button type="submit">Добавить</button>
                    </form>
                </div>
                <div id="riddlesList"></div>
            </div>
        );
    };

    return (
        <div>
            {riddles.map((riddle) => (
                <div key={riddle.id}>
                    <h3>Загадка {riddle.id}:</h3>
                    <p>{riddle.description}</p>
                    <ul>
                        {riddle.options.map((option, index) => (
                            <li key={index}>
                                <label>
                                    <input
                                        type="radio"
                                        name={`riddle${riddle.id}`}
                                        value={index}
                                        onChange={() => handleAnswerChange(riddle.id, index)}
                                        checked={answers[riddle.id - 1] === index}
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <button onClick={checkAnswers}>Завершить</button>
            <button id="addRiddleButton">Добавить загадку</button>
            <RiddleForm />
        </div>
    );
};

export default Item;