import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';

const customerIMs = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길금',
  'birthday': '900211',
  'gender': '남자',
  'job': '무직'
   },
   {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '강길동',
  'birthday': '890902',
  'gender': '남자',
  'job': '개발자'
  }     
]

class App extends Component {
    render(){
      return (
        <div>
          {
            customerIMs.map(clientInfo => {
              return(
                <Customer
                key={clientInfo.id} //map 사용시 key값 지정
                id={clientInfo.id}
                image={clientInfo.image}
                name={clientInfo.name}
                birthday={clientInfo.birthday}
                gender={clientInfo.gender}
                job={clientInfo.job}
                />
                )
            })
          }
        </div>
/*        <Customer
          id={CustomerIMs[0].id}
          image={CustomerIMs[0].image}
          name={CustomerIMs[0].name}
          birthday={CustomerIMs[0].birthday}
          gender={CustomerIMs[0].gender}
          job={CustomerIMs[0].job}
        />*/
      );
    };
  };

export default App;
