import { pascalCase } from 'scule';

type ComponentNameCaseVariants = {
    pascal: ReturnType<typeof pascalCase>;
    kebab: ReturnType<typeof pascalCase>;
    camel: ReturnType<typeof pascalCase>;
};

export interface TemplateData {
    component: {
        name: ComponentNameCaseVariants;
    };
    paths: {
        fromRoot: (path: string) => string;
    };
}
