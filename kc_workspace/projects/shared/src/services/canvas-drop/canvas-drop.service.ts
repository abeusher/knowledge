import {Injectable} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {KnowledgeSource} from "../../models/knowledge.source.model";

@Injectable({
  providedIn: 'root'
})
export class CanvasDropService {

  constructor() {
  }

  drop($event: CdkDragDrop<any>) {
    if ($event.previousContainer === $event.container) {
      console.log('Moving items within the same container...');
      moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
    } else {
      console.log('Moving items between different containers...');
      transferArrayItem($event.previousContainer.data, $event.container.data, $event.previousIndex, $event.currentIndex);
    }

    return $event.container.data;
  }

  update($event: CdkDragDrop<any>): void {
  }

  dropSource(data: KnowledgeSource) {

  }
}
