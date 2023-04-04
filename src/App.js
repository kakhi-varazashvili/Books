
import './App.css';
import {InformationSection} from './InformationSection';

function App() {
  return (
    <div className="App">
      <InformationSection headerName='ალუდა ქეთელაური' data={['ალუდა ქეთელაური','მუცალი']} img={"https://apiv1.biblusi.ge/storage/book/H2JgiddfYF3bbb9a6rS3cwHQ7UkufFwwYFDITPl9.png"}/>
      <InformationSection headerName='ბახტრიონი' data={['ბიძინა ჩოლოყაშვილი','შალვა', 'ელიზბარი']} img={"https://apiv1.biblusi.ge/storage/book/z0XvIRdwIGVJZgqk9J6S3tTjDDQUHi96RKDKQ531.jpg"}/>
      <InformationSection headerName='სტუმარ-მასპინძელი' data={['ჯოყოლა','ზვიადაური']} img={"https://apiv1.biblusi.ge/storage/book/s1Qf2aCUVIAdfJ4tOTGSmMv2A9kgap5ALpuEvfYK.jpg"}/>
      
  </div>
  );
}

export default App;
