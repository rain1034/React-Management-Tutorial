import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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
         <Table>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
            </TableBody>
          </Table>
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
