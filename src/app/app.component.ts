import { TuiRoot } from "@taiga-ui/core";
import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TUI_EDITOR_DEFAULT_EXTENSIONS, TUI_EDITOR_DEFAULT_TOOLS, TUI_EDITOR_EXTENSIONS, TuiEditor } from "@taiga-ui/editor";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, TuiRoot, TuiEditor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: TUI_EDITOR_EXTENSIONS,
      deps: [Injector],
      useFactory: (injector: Injector) => 
      [
        ...TUI_EDITOR_DEFAULT_EXTENSIONS,
        import('@taiga-ui/editor').then(({setup}) => setup({injector})),
      ],
    },
  ],
})
export class AppComponent 
{
  title = 'taiga-editor-4.10';

  readonly tools = TUI_EDITOR_DEFAULT_TOOLS;
  readonly control = new FormControl();
}
