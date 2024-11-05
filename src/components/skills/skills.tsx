import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {decrement, increment, selectCount} from '../../store/counterSlice';
import React from "react";
import {selectSkills} from "../../store/skillsSlice";
import "./skills.css"
import {skillsItemType} from "../../App.types";
import {colorLut} from "../../services/colorLut";

interface sortOptionType {
    id: string;
    direction?: 'asc' | 'desc';
    isSort?: boolean;
}

const Skills = () => {
    const dispatch = useAppDispatch()
    const count: number = useAppSelector(selectCount);
    const skills: skillsItemType[] = useAppSelector(selectSkills);
    const initSort: sortOptionType[] = Object.keys(skills[0]).map((id) => {
        return {id: id, direction: 'asc', isSort: false}
    });

    const [viewlist, setViewlist] = React.useState(skills);
    const [sortObj, setSortObj] = React.useState(initSort);
    const [sortBy, setSortBy]= React.useState( {id:''});

    const doSort = (col: sortOptionType) => {
        const dir:1|-1 = col.direction === 'asc' ? 1 : -1;
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

    const sortSkillsList = (col: sortOptionType) => {
        let updated: any = {};

            if (col.id === sortBy.id) {
                updated = sortObj.map(item => {
                    if (col.id === item.id) {
                        return {...item, direction: item.direction === 'asc' ? 'desc' : 'asc'};
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

    let idx=-1;
    const skillsHeader = sortObj.map((col: sortOptionType) => {
        idx++;
        return <td
            onClick={() => sortSkillsList(col)}
            style={{
                backgroundColor: col.isSort ? colorLut.highlight[idx] : colorLut.color[idx],
                color: col.isSort ? 'white' : '#d0d0d0'
            }}
            className="table-header" key={col.id}>
            {col.id} { col.isSort ? col.direction === 'asc' ? '+' : '-' : ''}
        </td>;
    });

    const skillsRows = viewlist.map((skill: any) => {
        return <tr key={skill.label}>
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


