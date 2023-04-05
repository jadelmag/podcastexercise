import { ITEM } from '../constants/xml.constants';
import { Item, Episode } from '../interfaces/xml.interface';

export const getItemsFromXML = (xmlitems: Item[]): Episode[] => {
  const items: Item[] = xmlitems.filter((x: Item) => x.name === ITEM);
  return getItem(items);
};

const getItem = (items: Item[]): Episode[] => {
  const list: Episode[] = [];
  items.forEach((item: Item) => {
    let obj: any = {};
    item.children.forEach((c) => {
      if (
        c.name === 'title' ||
        c.name === 'description' ||
        c.name === 'link' ||
        c.name === 'pubDate' ||
        c.name === 'itunes:duration' ||
        c.name === 'dc:creator' ||
        c.name === 'guid'
      ) {
        obj = { ...obj, [c.name]: c.value };
      }
      if (c.name === 'enclosure') {
        const media = c.attributes.type;
        const url = c.attributes.url;
        if (media === 'audio/mpeg') {
          obj = { ...obj, audio: url };
        }
      }
    });
    list.push(obj);
  });
  return list;
};
