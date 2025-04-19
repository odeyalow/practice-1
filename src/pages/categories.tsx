import ContentWrapper from '@/shared/components/contentWrapper';
import CategoriesList from '@/shared/components/categoriesList';

const Categories = () => {
    return (
        <ContentWrapper
        title='Categories'
        description='Looking for something specific?'>
            <CategoriesList />
        </ContentWrapper>
    );
}
 
export default Categories;