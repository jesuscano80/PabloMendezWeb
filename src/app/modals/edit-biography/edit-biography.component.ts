import { Component, OnInit } from '@angular/core';
import { SimpleNotificationComponent } from '../simple-notification/simple-notification.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-biography',
  templateUrl: './edit-biography.component.html',
  styleUrls: ['./edit-biography.component.scss']
})
export class EditBiographyComponent implements OnInit {

  // Estas variables se deben agrupar en un json ya son propiedades de un mismo objeto
  public title: string;
  public description: string;
  public photo: string;

  constructor(
    private dialogRef: MatDialogRef<EditBiographyComponent>,
    private matDialog: MatDialog
  ) {
        // Cambiar para meter la información desde el back
        this.title = "Compositor musical";
        this.description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perspiciatis illo,
        suscipit dolore pariatur provident at nulla doloremque aspernatur commodi accusantium
        et neque unde modi iste cupiditate ea, labore totam. Sint aliquid animi numquam sunt
        necessitatibus ab similique sit maxime accusamus? Reprehenderit numquam amet dolor
        magni illo am sunt necessitatibus ab similique sit maxime accusamus? Reprehenderit
        numquam am sunt necessitatibus ab similique sit maxime accusamus? Reprehenderit
        numquam rehenderit numquam am sunt necessitatibus ab similique sit maxime accusamus?
        numquam rehenderit numquam am sunt necessitatibus ab similique sit maxime accusamus?
        numquam rehenderit numquam am sunt necessitatibus ab similique sit maxime accusamus?
        numquam rehenderit numquam am sunt necessitatibus`;
        this.photo = "assets/Pablico.jpeg";
  }

  ngOnInit(): void {
  }
  public saveEdit() {
    this.dialogRef.close(); // This line close the actual modal for not overlap with SimpleNotification modal
    const dialogRef = this.matDialog.open(SimpleNotificationComponent,{panelClass: ['animate__animated','animate__backInDown']});
    dialogRef.componentInstance.message="Se han actualizado los datos de la página";
    dialogRef.afterClosed().subscribe();
  }
}
