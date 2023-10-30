import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar';

function Card({children}) {
  return (
   <div className='card'>
    {children}
   </div>
  );
}

export default function Profile(){
  return (
    <Card>
      <Avatar
      size ={90}
      person = {{
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2'
      }}
      />
    </Card>
  )
}
