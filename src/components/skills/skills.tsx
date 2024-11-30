import React from "react";
import {useAppSelector} from '../../store/hooks';
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

    const [sortObj, setSortObj] = React.useState(initSort);
    const [filterState, setFilterState] = React.useState(
        [
            {id: "Languages", label: "Languages", enabled: true},
            {id: "Integrations", label: "Integrations", enabled: true},
            {id: "Development", label: "Development", enabled: true},
            {id: "Tools", label: "Tools", enabled: true}
        ]
    );

    const doSort = (vList: skillsItemType[]): any => {
        const col: sortOptionType | undefined = sortObj.find ( item => item.isSort );

        if (col) {
            const dir: 1 | -1 = col.direction === 'asc' ? 1 : -1;
            switch (col.id.toUpperCase()) {
                case 'RATING':
                    return ([...vList].sort((a:skillsItemType, b:skillsItemType):number => {
                        return (b.rating * dir) - (a.rating * dir)
                    }));
                case 'YEARS':
                    return ([...vList].sort((a:skillsItemType, b:skillsItemType):number => {
                        return (b.years * dir) - (a.years * dir)
                    }));
                case 'TYPE':
                    return ([...vList].sort((a:skillsItemType, b:skillsItemType):number => {
                        return a.type.toUpperCase() > b.type.toUpperCase() ? 1 * dir : -1 * dir;
                    }));
                case 'LABEL':
                    return ([...vList].sort((a:skillsItemType, b:skillsItemType):number => {
                        return a.label.toUpperCase() > b.label.toUpperCase() ? 1 * dir : -1 * dir;
                    }));
            }
        }
        return vList;
    }

    const doFilter = (vList: skillsItemType[]): skillsItemType[] => {
        const filterMap = filterState.map((item: filterType):string | false => item.enabled && item.id);
        return vList.filter((item: skillsItemType):boolean => {
            return filterMap.includes(item.type);
        });
    }

    const filterUpdate = (filter: filterType):void => {
        const newFilter: filterType[] = filterState.map((item: filterType):filterType => {
            if (item.id.toUpperCase() === filter.id.toUpperCase()) {
                item.enabled = !item.enabled;
            }
            return item;
        });
        setFilterState(newFilter);
    }

    const sortUpdate = (col: sortOptionType):void => {
        let updated: any = {};
        const sortCol: sortOptionType | undefined = sortObj.find ( item => item.isSort );
        if (sortCol?.id===col.id) {
            updated = sortObj.map( (item): sortOptionType => {
                if (col.id === item.id) {
                    return {...item, direction: item.direction === 'asc' ? 'desc' : 'asc'};
                } else return item;
            });
        } else {
            updated = sortObj.map((item): sortOptionType => {
                if (col.id === item.id) {
                    return {...item, isSort: true};
                } else return {...item, isSort: false};
            });
        }
        setSortObj(updated);
    }

    const skillsHeader = sortObj.map((col: sortOptionType, idx: number) => {
        return <td
            onClick={() => sortUpdate(col)}
            style={{
                backgroundColor: col.isSort ? colorLut.highlight[idx] : colorLut.lowlight[idx],
                color: col.isSort ? 'white' : '#808080'
            }}
            className="table-header" key={col.id}>
            {col.id} {col.isSort ? col.direction === 'asc' ? '+' : '-' : ''}
        </td>;
    });

    const skillsRows = doFilter(doSort(skills)).map((skill: any) => {
        return <tr key={skill.label}>
            <td>{skill.label}</td>
            <td>{skill.type}</td>
            <td>{skill.rating}</td>
            <td>{skill.years}</td>
        </tr>;
    });

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


