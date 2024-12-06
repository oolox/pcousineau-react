import React from "react";
import {useAppSelector} from '../../store/hooks';
import {selectSkills} from "../../store/skillsSlice";
import {filterType, skillsItemType} from "../../App.types";
import {colorLut} from "../../services/colorLut";
import "./skills.css"
import FilterSelect from "../filterselect/filterselect";
import SkillsChart from "./skillsChart"

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

    const [searchField, setSearchField] = React.useState('');
    const [searchString, setSearchString] = React.useState('');


    const doSort = (vList: skillsItemType[]): any => {
        const col: sortOptionType | undefined = sortObj.find(item => item.isSort);

        if (col) {
            const dir: 1 | -1 = col.direction === 'asc' ? 1 : -1;
            switch (col.id.toUpperCase()) {
                case 'RATING':
                    return ([...vList].sort((a: skillsItemType, b: skillsItemType): number => {
                        return (b.rating * dir) - (a.rating * dir)
                    }));
                case 'YEARS':
                    return ([...vList].sort((a: skillsItemType, b: skillsItemType): number => {
                        return (b.years * dir) - (a.years * dir)
                    }));
                case 'TYPE':
                    return ([...vList].sort((a: skillsItemType, b: skillsItemType): number => {
                        return a.type.toUpperCase() > b.type.toUpperCase() ? 1 * dir : -1 * dir;
                    }));
                case 'LABEL':
                    return ([...vList].sort((a: skillsItemType, b: skillsItemType): number => {
                        return a.label.toUpperCase() > b.label.toUpperCase() ? 1 * dir : -1 * dir;
                    }));
            }
        }
        return vList;
    }

    const doFilter = (vList: skillsItemType[]): skillsItemType[] => {
        const filterMap = filterState.map((item: filterType): string | false => item.enabled && item.id);
        return vList.filter((item: skillsItemType): boolean => {
            return filterMap.includes(item.type);
        });
    }

    const doSearch = (vList: skillsItemType[]): skillsItemType[] => {
        if (searchString && searchString.length > 2) {
            return vList.filter( (item:skillsItemType) => item.label.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
        }
        return vList;
    }

    const getViewList = ():skillsItemType[] => {
        return doSearch(doFilter(doSort(skills)));
    }


    const filterUpdate = (filter: filterType): void => {
        const newFilter: filterType[] = filterState.map((item: filterType): filterType => {
            if (item.id.toUpperCase() === filter.id.toUpperCase()) {
                item.enabled = !item.enabled;
            }
            return item;
        });
        setFilterState(newFilter);
    }

    const sortUpdate = (col: sortOptionType): void => {
        let updated: any = {};
        const sortCol: sortOptionType | undefined = sortObj.find(item => item.isSort);
        if (sortCol?.id === col.id) {
            updated = sortObj.map((item): sortOptionType => {
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

    React.useEffect(() => {
        const timerId = setTimeout( () => setSearchString(searchField),1000);
        return () => {
            clearTimeout(timerId);
        };
    }, [searchField]);

    const handleSearch = (searchStr: string) => {
        setSearchField(searchStr);
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

    const skillsRows = getViewList().map((skill: any) => {
        return <tr key={skill.label}>
            <td>{skill.label}</td>
            <td>{skill.type}</td>
            <td>{skill.rating}</td>
            <td>{skill.years}</td>
        </tr>;
    });

    const clearSearch = () => {
        setSearchField('');
        setSearchString('');
    }

    return <div className="skills">
        <div className="searchContainer">
            <div className="searchLabel">
                Search
            </div>
            <input
                value={searchField}
                onChange={(e) => handleSearch(e.target.value)}
                className="seachField" name="searchField"/>
            <button
                style={ searchField.length>0 ? { display: "inherit" } : { display:"none" }}
                onClick={ () => clearSearch() }>
                X
            </button>
        </div>
        <div className="skillTable">
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
            <div className="chart-container">
                <SkillsChart data={getViewList()}></SkillsChart>
            </div>
        </div>
    </div>
        ;
        }

        export default Skills;


