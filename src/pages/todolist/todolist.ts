import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Task } from '../../models/task';
import { NgForm } from '@angular/forms';
import { TaskListService } from '../../services/tasklist';
import { AuthService } from '../../services/authservice';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-todolist',
  templateUrl: 'todolist.html',
})
export class TodolistPage {

  listItems: Task[];

  constructor(
    private taskListService: TaskListService, 
    private authService: AuthService, 
    private navCtrl: NavController) {
  }

  ionViewWillEnter() {
    this.loadItems();
  }

  onAddItem(form: NgForm) {
    this.taskListService.addItem(form.value.taskName);
    form.reset();
    this.loadItems();
  }

  onCheckItem(index: number) {
    this.taskListService.removeItem(index);
    this.loadItems();
  }

  private loadItems() {
    this.listItems = this.taskListService.getItems();
  }

  onLogOut() {
    this.authService.logout();
    this.navCtrl.setRoot(HomePage);
  }

}
