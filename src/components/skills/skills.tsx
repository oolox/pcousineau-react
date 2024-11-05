import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {decrement, increment, selectCount} from '../../store/counterSlice';
import React from "react";
import {selectSkills} from "../../store/skillsSlice";
import "./skills.css"
import {skillsItemType} from "../../App.types";

const Skills = () => {
    const dispatch = useAppDispatch()
    const count: number = useAppSelector(selectCount);
    const skills: skillsItemType[] = useAppSelector(selectSkills);

    const initSort: any[] = Object.keys(skills[0]).map((id) => {
        return {id: id, direction: 'asc', isSort: false}
    });

    const [viewlist, setViewlist] = React.useState(skills);
    const [sortBy, setSortBy] = React.useState({id: 'type', direction: 'asc'});
    const [sortObj, setSortObj] = React.useState(initSort);

    const doSort = (col: any) => {

        const dir = col.direction === 'asc' ? 1 : -1;

        switch (col.id) {
            case 'rating':
                setViewlist([...viewlist].sort((a, b) => {
                    return (b.rating*dir) - (a.rating*dir)
                }));
                break;
            case 'years':
                setViewlist([...viewlist].sort((a, b) => {
                    return (b.years*dir) - (a.years*dir)
                }));
                break;
            case 'type':
                setViewlist([...viewlist].sort((a, b) => {
                    return a.type.toUpperCase() > b.type.toUpperCase() ? 1 * dir : -1 * dir;
                }));
                break;
            case 'label':
                setViewlist([...viewlist].sort((a, b) => {
                    return a.label.toUpperCase() > b.label.toUpperCase() ? 1 * dir : -1 * dir;
                }));
                break;
        }
    }

    const sortSkillsList = (col: any) => {
        let updated: any = {};
        if (col.id === sortBy.id) {
            updated = sortObj.map(item => {
                if (col.id === item.id) {
                    return {...item, direction: item.direction == 'asc' ? 'desc' : 'asc'};
                } else return item;
            });
        } else {
            updated = sortObj.map(item => {
                if (col.id === item.id) {
                    return {...item, isSort: true};
                } else return {...item, isSort: false};
            });
        }

        updated.forEach((item: any) => {
            if (item.id === col.id) {
                setSortBy(item);
                doSort(item);
            }
        })
        setSortObj(updated);
    }

    const skillsHeader = sortObj.map((col: any) => {
        return <td
            onClick={() => sortSkillsList(col)}
            style={ { backgroundColor: col.isSort ? '#202020' : '#808080'}}

            className="table-header" id={col.id}>
            {col.id} { col.isSort ? col.direction == 'asc' ? '+' : '-' : ''}
        </td>;
    });

    const skillsRows = viewlist.map((skill: any) => {
        return <tr id={skill.label}>
            <td>{skill.label}</td>
            <td>{skill.type}</td>
            <td>{skill.rating}</td>
            <td>{skill.years}</td>
        </tr>;
    });

    const countcontrols =
        <code style={{backgroundColor: '#0080ff'}}>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </code>

    return <div className="skills">
        <table>
            <thead>
            <tr>{skillsHeader}</tr>
            </thead>
            <tbody>
            {skillsRows}
            </tbody>
        </table>
    </div>;
}

export default Skills;


