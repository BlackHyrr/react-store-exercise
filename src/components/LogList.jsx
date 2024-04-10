import { useSelector } from 'react-redux';

const LogList = () => {
    const logs = useSelector(state => state.logs);

    return (
        <ul>
            {logs.map((log, index) => (
                <li key={index}>
                    {log.timestamp} - {log.name}
                </li>
            ))}
        </ul>
    );
}

export default LogList;