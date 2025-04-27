import { useEffect, useState } from 'react'

const Names = ["Сюй Чжихао", "Сиу Лей", "Ань Юминг", "Лэй Сюн", "Сюин Фа", "Зан Айго", "Линь Лао", "Пу Вань", "Се Ши", "Лай Юймин", "Бию Тань", "Кан Вэньянь", "Хоу Лу", "Хуба Буба"];

function getRandomName(){
        const index = Math.floor(Math.random() * Names.length);
        return Names[index];
};

export function Container (){
    const [name, setName] = useState(getRandomName());
    useEffect( () => {
        const interval = setInterval(() => {
            setName(getRandomName());
        }, 10000);

        return () => clearInterval(interval);
    }, [name]);

    return (
        <>
        <Header />
        <Greeting name={name} />
        <Clock />
        </>
    );

};

function Header(){
    return <h1>Это мой первый React. проект!</h1>
}

function Greeting ({ name }) {
    const [prevName, setPrevName] = useState(name);
    const [changed, setChanged] = useState(false);
  
    useEffect(() => {
      if (prevName !== name) {
        console.log(1);
        console.log(changed);
        setChanged(true);
        setPrevName(name);
      }
    }, [name, prevName]);
  
    return (
      <div>
        {changed ? (
          <h1>Привет, у тебя поменялось имя, теперь ты {name}!</h1>
        ) : (
          <h1>Привет, {name}!</h1>
        )}
      </div>
    );
  };

function Clock(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    });
    
    return (
        <div>
            <h2>Дата: {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</h2>
            {currentTime.getMinutes() % 5 === 0 && (
                <h3>Время делится на 5</h3>
            )}
        </div>
    );
};



   