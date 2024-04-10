import { useSelector } from 'react-redux';
import './LogList.css';

const LogList = () => {
    const logs = useSelector(state => state.logs);

    console.log(logs);

    return (
        <div className={'log-container'}>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>
                        {">>"} {log.timestamp} - {log.name} - {log.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LogList;