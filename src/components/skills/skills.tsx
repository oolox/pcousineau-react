import React from "react";
import {useAppSelector } from '../../store/hooks';
import {selectSkills} from "../../store/skillsSlice";
import {filterType, skillsItemType} from "../../App.types";
import {colorLut} from "../../services/colorLut";
import "./skills.css"
import FilterSelect from "../filterselect/filterselect";


interface sortOptionType {
    id: string;
    direction?: 'asc' | 'desc';
    isSort?: boolean;
}

const Skills = () => {
    const skills: skillsItemType[] = useAppSelector(selectSkills);
    const initSort: sortOptionType[] = Object.keys(skills[0]).map((id) => {
        return {id: id, direction: 'asc', isSort: false}
    });

    const [viewlist, setViewlist] = React.useState(skills);
    const [sortObj, setSortObj] = React.useState(initSort);
    const [sortBy, setSortBy]= React.useState( {id:''});

    const [filterState, setFilterState] = React.useState(
        [
            { id:"Languages", label:"Languages", enabled: true },
            { id:"Integrations", label:"Integrations", enabled: true },
            { id:"Development", label:"Development", enabled: true },
            { id:"Tools", label:"Tools", enabled: true }
        ]
    );

    const filterUpdate = ( filter:filterType) => {
        const newFilter: filterType[] = filterState.map( (item:filterType) => {
            if (item.id.toUpperCase()===filter.id.toUpperCase()) {
                item.enabled = !item.enabled;
            }
            return item;
        });
        setFilterState(newFilter);
        doFilter();
    }

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

    const skillsHeader = sortObj.map((col: sortOptionType,idx:number) => {
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


    const doFilter= () => {
        const filterMap = filterState.map( (item:filterType) => item.enabled && item.id );
        console.log('doFilter: ',filterMap, viewlist);
        const newViewlist:skillsItemType[] = viewlist.filter( (item:skillsItemType)=> {
            return filterMap.includes(item.type);
        })
        console.log('           newViewlist: ',newViewlist);
        setViewlist(newViewlist);

    }



    return <div className="skills">
        <FilterSelect filters={filterState} filterupdate={filterUpdate}/>
        <table>
            <thead>
                <tr>
                    {skillsHeader}
                </tr>
            </thead>
            <tbody>
                {skillsRows}
            </tbody>
        </table>
    </div>;
}

export default Skills;


