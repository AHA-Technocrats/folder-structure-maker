import { TreeData } from './tree-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {

  _dataChange = new BehaviorSubject<TreeData[]>(
    [{
      Id: 1,
      Name: 'my_first_folder',
      Children: [
        {
          Id: 3,
          Name: 'first_doc.html',
          Children: []
        },
        {
          Id: 4,
          Name: 'second_doc.jpeg',
          Children: []
        },
        {
          Id: 5,
          Name: 'my_second_folder',
          Children: [
            {
              Id: 6,
              Name: 'file_in_second_folder.txt',
              Children: [
              ]
            },
            {
              Id: 7,
              Name: 'another_folder',
              Children: [
                {
                  Id: 8,
                  Name: 'random.txt',
                  Children: []
                },
                {
                  Id: 9,
                  Name: 'another_file.png',
                  Children: []
                },
                {
                  Id: 10,
                  Name: 'helloworld.html',
                  Children: []
                },
              ]
            }
          ]
        }
      ]
    },
    {
      Id: 2,
      Name: 'second_folder',
      Children: [
        {
          Id: 11,
          Name: 'some_img.jpg',
          Children: []
        }
      ]
    }
  ]
  );


}
