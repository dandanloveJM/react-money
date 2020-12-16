import {useState} from 'react'
import {createId} from "./lib/createId";

const defaultTags = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'}
]

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
    const findTags = (id: number) => tags.filter(tag => tag.id === id)[0];
    const findTagIndex = (id: number) => {
        let result = -1
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    }
    // 传id是为了确定要改哪一个tag,
    const updateTag = (id: number, obj: {name: string}) => {
        const index = findTagIndex(id);
        // 深拷贝tags
        const newTags = JSON.parse(JSON.stringify(tags));
        // 删掉原先的tag, 然后替换
        newTags.splice(index, 1, {id, name: obj.name})
        setTags(newTags);

    }

    const deleteTag = (id: number) => {
        const index = findTagIndex(id);
        // 深拷贝tags
        const newTags = JSON.parse(JSON.stringify(tags));
        // 删掉原先的tag, 然后替换
        newTags.splice(index, 1)
        setTags(newTags);
    }

    return {tags, setTags, findTags, updateTag, findTagIndex, deleteTag}
}

export {useTags}
