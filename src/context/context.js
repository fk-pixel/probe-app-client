import { createContext, useContext, useState, /* useEfefect, useCallback */ } from "react";
import axios from "axios";

const AppContext = createContext();

export const useAppContext = () =>
    useContext(AppContext);


export function AppProvider({ children }) {

    const [monthlyData, setMonthlyData] = useState([]);
    const [weeklyData, setWeeklyData] = useState([]);
    const [dailyData, setDailyData] = useState([]);

    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);

    const getDaily = () => {
        axios.get("http://localhost:3000/day")
            .then((res) => res.json())
            .then((json) => setDailyData(json.res))
    };
    const getWeekly = () => {
        axios.get("http://localhost:3000/weekly")
            .then((res) => res.json())
            .then((json) => setWeeklyData(json.res))
    };
    const getMonthly = () => {
        axios.get("http://localhost:3000/monthly")
            .then((res) => res.json())
            .then((json) => setMonthlyData(json.res))
    };
    const value = {
        getDaily,
        getWeekly,
        getMonthly,
        items,
        inputValue,
        selectedValue
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

}